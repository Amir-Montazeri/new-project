// export const getBase64 = async (file, cb) => {
//   let blob = await createFile(file);
//   let reader = new FileReader();
//   reader.readAsDataURL(blob);
//   reader.onload = function () {

//     cb(reader.result);
//   };
//   reader.onerror = function (error) {

//     console.log("Error: ", error);
//   };
// };

export async function createFile(url) {
  let response = await fetch(url);
  let data = await response.blob();
  let metadata = {
    type: "image/jpeg",
  };
  let file = new File([data], "test.jpg", metadata);
  return file;
}

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
