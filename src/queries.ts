import gql from "graphql-tag";

export const GET_MAILBOX = gql`
  query GetMailbox($mailbox: String!) {
    inbox(mailbox: $mailbox) {
      id
      headerfrom
      subject
      date
    }
  }
`;

export const GET_MESSAGE = gql`
  query GetMessage($mailbox: String!, $id: String!) {
    message(mailbox: $mailbox, id: $id) {
      id
      headerfrom
      subject
      date
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($mailbox: String!, $id: String!) {
    delete(mailbox: $mailbox, id: $id)
  }
`;

export const GET_ALT_INBOX = gql`
  query GetAltInbox($mailbox: String!) {
    altinbox(mailbox: $mailbox)
  }
`;

export const GET_STATISTICS = gql`
  query GetStatistics {
    statistics {
      blocked
      saved
    }
  }
`;

export const GET_STATUS = gql`
  query GetStatus {
    status
  }
`;
