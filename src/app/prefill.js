export default function Prefill(slice) {
  const prefillData = window.Prefill;
  if (!prefillData) {
    return null;
  }
  return prefillData[slice];
}
