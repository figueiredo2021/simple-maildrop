# Simple Maildrop

A simple TypeScript library for interacting with the Maildrop API.
Get more information about Maildrop service visiting their website at 
[https://maildrop.cc/](https://maildrop.cc/).

## Installation

Install with `npm npm install --save simple-maildrop` or `pnpm add simple-maildrop`

## Usage

First, import the `Maildrop` function from the `simple-maildrop` package:

```typescript
import Maildrop from 'simple-maildrop';
```

Then, create a new `Maildrop` instance:

```typescript
const maildrop = Maildrop();
```

You can now use the `Maildrop` instance to interact with the Maildrop API:

```typescript
// Get a mailbox
const mailbox = await maildrop.getMailbox({ mailbox: 'test' });

// Get a message
const message = await maildrop.getMessage({ mailbox: 'test', id: '1' });

// Delete a message
const deleteResult = await maildrop.deleteMessage({ mailbox: 'test', id: '1' });

// Get an alternative inbox
const altInbox = await maildrop.getAltInbox({ mailbox: 'test' });

// Get statistics
const statistics = await maildrop.getStatistics({});

// Get status
const status = await maildrop.getStatus({});
```

## Testing

To run the tests, use the `npm test` or `pnpm test`:
