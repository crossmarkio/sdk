import { default as sdk } from "https://unpkg.com/@crossmarkio/sdk@0.2.9-beta";

const init = async () => {
  console.log("initializing");
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  console.log("attempting sign in");
  const resp = await sdk.signIn();
};

init();
