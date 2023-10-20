import useSWR from "swr";
import {
  enablePolling,
  pollingInterval,
  endpoint,
  apiHeaders,
} from "@/helpers/constants";
import { CommentType } from "@/helpers/types";

interface UseCommentsType {
  comments: CommentType[];
  create: (comment: CommentType) => Promise<void>;
  error: Error;
  isLoading: boolean;
  purge: () => Promise<void>;
  refresh: () => Promise<CommentType[]>;
  seed: () => Promise<void>;
}

const useComments = (): UseCommentsType => {
  async function fetchComments() {
    const response = await fetch(endpoint.fetch);
    const data = await response.json();
    return data;
  }

  const {
    data: comments,
    isLoading,
    error,
    mutate: refresh,
  } = useSWR("getComments", fetchComments, {
    refreshInterval: enablePolling ? pollingInterval : 0,
  });

  async function create(comment: CommentType) {
    await fetch(endpoint.create, {
      method: "POST",
      headers: apiHeaders,
      body: JSON.stringify(comment),
    });
    refresh();
  }

  async function seed() {
    await fetch(endpoint.seed, {
      method: "POST",
      headers: apiHeaders,
    });
    refresh();
  }

  async function purge() {
    await fetch(endpoint.purge, {
      method: "DELETE",
    });
    refresh();
  }

  return {
    comments,
    create,
    error,
    isLoading,
    purge,
    refresh,
    seed,
  };
};

export default useComments;
