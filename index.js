if (!process.env.IGNORE_SERVER_ONLY) {
  throw new Error(
    "This module cannot be imported from a Client Component module. " +
      "It should only be used from a Server Component."
  );
}
