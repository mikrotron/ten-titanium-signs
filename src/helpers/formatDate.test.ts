import formatDate from "./formatDate";
import { vi } from "vitest";

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2023, 8, 18));
});

afterAll(() => {
  vi.useRealTimers();
});

describe("Timezones", () => {
  it("should always be UTC", () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });
});

describe("formatDate", () => {
  it("should format the date correctly for dates within the current week", () => {
    const date = new Date(2023, 8, 17);
    const expectedDate = "Sunday at 12:00 AM";

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual(expectedDate);
  });

  it("should format the date correctly for dates outside the current week", () => {
    const date = new Date("2023-01-01T00:00:00.000Z");
    const expectedDate = "January 1 at 12:00 AM";

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual(expectedDate);
  });
});
