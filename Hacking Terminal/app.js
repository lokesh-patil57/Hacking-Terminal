let text = [
  "Initializing Hacking ...",
  "Reading your files ...",
  "Password files detected ...",
  "Accessing all Passwords ...",
  "Accessing all Personal files ...",
  "Sending all Passwords and Personal file to Server ...",
  "cleaning up ...",
];

const addItem = async (item) => {
  await ranDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const ranDelay = () => {
  return new Promise((res, rej) => {
    let timeOut = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      res();
    }, timeOut * 1000);
  });
};
async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 150);

  for (const item of text) {
    await addItem(item);
  }
}

main();
