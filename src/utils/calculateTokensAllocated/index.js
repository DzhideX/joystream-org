export default (extraAllocation) => {
  let tokensAllocatedString;

  if(extraAllocation !== undefined || extraAllocation !== null){
    tokensAllocatedString = `${extraAllocation.toFixed(2)}`
  }else {
      tokensAllocatedString = '-';
  }

  return `${tokensAllocatedString}%`;
}
