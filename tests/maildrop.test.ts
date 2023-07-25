import axios from "axios";
import Maildrop from "../src/index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Maildrop", () => {
  let maildrop: ReturnType<typeof Maildrop>;

  beforeEach(() => {
    maildrop = Maildrop();
  });

  it("gets a mailbox", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.getMailbox({ mailbox: "test" });
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: { mailbox: "test" } });
  });

  it("gets a message", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.getMessage({ mailbox: "test", id: "1" });
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: { mailbox: "test", id: "1" } });
  });

  it("deletes a message", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.deleteMessage({ mailbox: "test", id: "1" });
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: { mailbox: "test", id: "1" } });
  });

  it("gets an alternative inbox", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.getAltInbox({ mailbox: "test" });
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: { mailbox: "test" } });
  });

  it("gets statistics", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.getStatistics({});
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: {} });
  });

  it("gets status", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { data: "mockedData" } });
    const data = await maildrop.getStatus({});
    expect(data).toBe("mockedData");
    expect(mockedAxios.post).toHaveBeenCalledWith("https://api.maildrop.cc/graphql", { query: expect.any(String), variables: {} });
  });
});
