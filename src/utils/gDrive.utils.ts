export const getGDriveLink = (link: string,width:number=400): string => {
  if (link.includes("drive.google.com")) {
    const fileId = link.match(/(?:https:\/\/)?drive\.google\.com\/(?:file\/d\/|open\?id=)([^\/?&]+)/);

    if (fileId) return `https://drive.google.com/thumbnail?id=${fileId[1]}&sz=w${width}`;
  }

  return link;
};
