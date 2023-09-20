/* eslint-disable no-param-reassign */
import en from './en.json';

type KeyPaths<T extends INestedMessages> = {
  [K in keyof T]: T[K] extends INestedMessages
    ? `${K & string}.${KeyPaths<T[K]> & string}` : K;
}[keyof T];

export interface INestedMessages {
  [key: string]: string | INestedMessages;
}

export type TranslationKey = KeyPaths<typeof en>;

export const flattenMessages = (
  nestedMessages: INestedMessages,
  prefix = '',
): Record<string, string> => Object.keys(nestedMessages).reduce(
  (messages: Record<string, string>, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  },
  {},
);
