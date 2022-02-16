<!--

Hello there!

Thank you for opening a pull request!
Please make sure to follow the steps below when opening a pr:

- Sign the CLA https://www.elastic.co/contributor-agreement/
- Tag the relative issue (if any) and give a brief explanation on what your changes are doing
- If you did a spec change, remember to generate again the outputs, you can do it by running `make contrib`
- Add the appropriate backport labels. If you need to backport a breaking change (e.g. changing the structure of a type or changing the type/optionality of a field), please follow these rules:
  - If the API is unusable without the change -> every supported version
  - If the API is usable, but fix is on the response side -> every supported version
  - If the API is usable, but fix is on the request side -> no backport, unless the API is _partially_ usable and the fix unlocks a missing feature that has no workaround

Happy coding!

-->
