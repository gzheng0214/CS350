const reverse = (str) =>
  str
    .split("")
    .sort(function (a, b) {
      return b.localeCompare(a);
    })
    .join("");

console.log(`Reverse alphabetical order: exioi -> ${reverse("exioi")}`);
console.log(
  `Reverse alphabetical order: supercalifragilisticexpialidocious -> ${reverse(
    "supercalifragilisticexpialidocious"
  )}`
);
