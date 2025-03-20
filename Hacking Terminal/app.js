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
  let div = document.createElement()
};

const ranDelay = () => {
  return new Promise((res, rej) => {
    let timeOut = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      res()
    }, timeout*1000); 
  });
};

for (const val of text) {
  addItem(item);
}
