import axios from 'axios';
import {
  GET_MAILBOX,
  GET_MESSAGE,
  DELETE_MESSAGE,
  GET_ALT_INBOX,
  GET_STATISTICS,
  GET_STATUS,
} from './queries.js';

const baseUrl = 'https://api.maildrop.cc/graphql';

type MailboxVariable = {
  mailbox: string;
};

type MessageVariable = {
  mailbox: string;
  id: string;
};

const graphQLRequest = async <V>(query: any, variables: V) => {
  const response = await axios.post(baseUrl, { query: query.loc.source.body, variables });
  return response.data.data;
};

const apiCall =
  <V>(query: any) =>
  async (variables: V) =>
    graphQLRequest(query, variables);

const Maildrop = () => {
  return {
    getMailbox: apiCall<MailboxVariable>(GET_MAILBOX),
    getMessage: apiCall<MessageVariable>(GET_MESSAGE),
    deleteMessage: apiCall<MessageVariable>(DELETE_MESSAGE),
    getAltInbox: apiCall<MailboxVariable>(GET_ALT_INBOX),
    getStatistics: apiCall<{}>(GET_STATISTICS),
    getStatus: apiCall<{}>(GET_STATUS),
  };
};

export default Maildrop;
