module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "PSZHxtt0Jef19FCFHKsxqA==",
      "zZscA0WkcBzYB1fERTqELA==",
      "7+SlxjE32bwJqeFYkPBQWQ==",
      "Hl6odczFC/2yLOJTfIrlrA==",
    ],
  },
});
