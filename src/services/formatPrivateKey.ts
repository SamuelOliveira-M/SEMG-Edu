export function formatPrivateKey(key: string | undefined): string {
  if (!key) {
    throw new Error("Private key is undefined");
  }
  return key.replace(/\\n/g, '\n');
}