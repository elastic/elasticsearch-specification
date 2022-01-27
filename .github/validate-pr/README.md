# Validate PR Github Action

This pr will validate all the endpoints that have been updated in a given pull request.
It runs automatically and it post a comment to the pr at the end of the validation.

## How it decides which endpint should be validated?

It looks at the file changed paths. Following the rules it uses to figure out what needs to be tested:

- if the path is an api, for example `/specification/indices/create` it will validate the `indices.create` api.
- if the path is the `_types` folder of a namespace, it will test the whole namespace. For example, `/specification/indices/_types` will test the entire `indices` namespace.
- changes done in the top level `_types`, `_spec_utils`, `_json_spec`, and `_doc_ids` are not tested.
