export const extractErrorMessage = (error: string) => {
  const startTag = "<pre>";
  const endTag = "</pre>";
  const startIndex = error.indexOf(startTag);
  const endIndex = error.indexOf(endTag);
  if (startIndex >= 0 && endIndex >= 0) {
    return error.substring(startIndex + startTag.length, endIndex);
  }
  return error;
}