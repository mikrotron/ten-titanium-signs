import useSWR from "swr";
import { enablePolling, pollingInterval } from "@/helpers/constants";
import { CommentType } from "@/helpers/types";

interface UseCommentsType {
  comments: CommentType[];
  isLoading: boolean;
  refresh: () => Promise<CommentType[]>;
  postData: (comment: CommentType) => Promise<void>;
  seedData: () => Promise<void>;
  purge: () => Promise<void>;
}

const useComments = (): UseCommentsType => {
  const fetchComments = async () => {
    const response = await fetch("//localhost:3001/getComments");
    const data = await response.json();
    return data;
  };

  const {
    data: comments,
    isLoading,
    mutate: refresh,
  } = useSWR("getComments", fetchComments, {
    refreshInterval: enablePolling ? pollingInterval : 0,
  });

  async function postData(comment: CommentType) {
    await fetch("//localhost:3001/createComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    refresh();
  }

  async function seedData() {
    await fetch("//localhost:3001/createComments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    refresh();
  }

  async function purge() {
    await fetch("//localhost:3001/deleteComments", {
      method: "DELETE",
    });
    refresh();
  }

  return {
    comments,
    isLoading,
    refresh,
    postData,
    seedData,
    purge,
  };
};

export default useComments;
