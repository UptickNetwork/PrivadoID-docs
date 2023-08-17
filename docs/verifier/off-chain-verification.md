---
id: off-chain-verification
title: Off-chain Verification Flow
sidebar_label: Overview
description: Off-chain verification workflow.
keywords: 
  - docs
  - polygon id
  - verifier
  - off chain verification
---

At its core, every off-chain interaction between a Verifier and a user's Wallet follows this workflow:

![](/img/off-chain-flow.png)

- A web application designs a [request](request-api.md) for the users. This is delivered to the user within a QR code (or via deep-linking; it is up to the implementer). This can either be a [auth request](request-api.md#basic-auth-request) or a [query-based request](request-api.md#query-based-request).
- The user scans the QR code using his/her mobile ID wallet and parses the request
- The user fetches the revocation status of the requested credential from the Issuer of that credential.
- The user generates a zk proof on mobile according to the request of the website starting from the credentials held in his/her wallet. This also contains the zk proof that the credential is not revoked.
- The user sends the zk proof to the Verifier.
- The Verifier verifies the zk proof using the [verification API](verification-api.md).
- The Verifier checks that the State of the Issuer of the credential and the State of the user are still valid and have not been revoked (this is still performed using the same [verification API](verification-api.md)).
- If the verification is successful, the Verifier grants access to the user (or activates any customized logic)

Assume that the request is: "Are you over 18 years old?". The Verifier *never gets access to any of the user's credentials*. Instead, the Verifier receives a cryptographic proof which, on verification, provides an answer "yes" or "no" to the previous question. 

This section provides all the elements needed to integrate off-chain verification with Polygon ID.

## Libraries

The authentication flow can be implemented either in GoLang or Javascript

- [Go Iden3 Verification Library](https://github.com/iden3/go-iden3-auth)

- [JS Iden3 Verification Library](https://github.com/iden3/js-iden3-auth)