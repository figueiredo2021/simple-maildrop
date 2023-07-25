"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_STATUS = exports.GET_STATISTICS = exports.GET_ALT_INBOX = exports.DELETE_MESSAGE = exports.GET_MESSAGE = exports.GET_MAILBOX = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GET_MAILBOX = (0, graphql_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetMailbox($mailbox: String!) {\n    inbox(mailbox: $mailbox) {\n      id\n      headerfrom\n      subject\n      date\n    }\n  }\n"], ["\n  query GetMailbox($mailbox: String!) {\n    inbox(mailbox: $mailbox) {\n      id\n      headerfrom\n      subject\n      date\n    }\n  }\n"])));
exports.GET_MESSAGE = (0, graphql_tag_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query GetMessage($mailbox: String!, $id: String!) {\n    message(mailbox: $mailbox, id: $id) {\n      id\n      headerfrom\n      subject\n      date\n    }\n  }\n"], ["\n  query GetMessage($mailbox: String!, $id: String!) {\n    message(mailbox: $mailbox, id: $id) {\n      id\n      headerfrom\n      subject\n      date\n    }\n  }\n"])));
exports.DELETE_MESSAGE = (0, graphql_tag_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation DeleteMessage($mailbox: String!, $id: String!) {\n    delete(mailbox: $mailbox, id: $id)\n  }\n"], ["\n  mutation DeleteMessage($mailbox: String!, $id: String!) {\n    delete(mailbox: $mailbox, id: $id)\n  }\n"])));
exports.GET_ALT_INBOX = (0, graphql_tag_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query GetAltInbox($mailbox: String!) {\n    altinbox(mailbox: $mailbox)\n  }\n"], ["\n  query GetAltInbox($mailbox: String!) {\n    altinbox(mailbox: $mailbox)\n  }\n"])));
exports.GET_STATISTICS = (0, graphql_tag_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query GetStatistics {\n    statistics {\n      blocked\n      saved\n    }\n  }\n"], ["\n  query GetStatistics {\n    statistics {\n      blocked\n      saved\n    }\n  }\n"])));
exports.GET_STATUS = (0, graphql_tag_1.default)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  query GetStatus {\n    status\n  }\n"], ["\n  query GetStatus {\n    status\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
