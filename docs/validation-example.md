# Fixing a definition, a complete story

This document is an example of how you could interact with the project
when fixing a definition.

Let's assume that the index document request definition is broken, how can you fix it?

## Detect the error

Very likely you know a definition is no longer valid because you saw a validation
error in the validation [report](https://github.com/elastic/clients-flight-recorder/blob/main/recordings/types-validation/types-validation.md).

## Finding and fixing the error

The example assumes that you have already performed the necessary steps to run a validation,
if not, take a look at the [README](../README.md).

```sh
make validate api=index branch=main
```

You will see an output like the following:

```sh
 workbench/{fileName}.test-d.ts:4:2
  ✖     4:2   Type number is not assignable to type string | undefined.
```

You can open the broken test that has been generated in `clients-flight-recorder/scripts/types-validator/workbench`.

```sh
code clients-flight-recorder/scripts/types-validator/workbench/{fileName}.test-d.ts
```

```ts
import { expectAssignable } from 'tsd'
import * as T from '../node_modules/elasticsearch-client-specification/output/typescript/types'
expectAssignable<T.IndexRequest<any>>({
  "index": "test_1",
  "id": 1,
  "op_type": "create",
  "body": {
    "foo": "bar"
  }
})
```

You can play with the response to better understand where is the problem, once you have done it
you should search inside `elasticsearch-specification/specification` the type definition,
open it with your favourite editor and perform the fix

```diff
 /**
  * @type_stability stable
  */
 @rest_spec_name("index")
 @class_serializer("IndexRequestFormatter`1")
 class IndexRequest<TDocument> extends RequestBase {
   path_parts: {
-     id?: string;
+     id?: string | number;
     index: string;
     type?: string;
   }
   query_parameters: {
     if_primary_term?: long;
     if_seq_no?: long;
     op_type?: OpType;
     pipeline?: string;
     refresh?: Refresh;
     routing?: Routing;
     timeout?: Duration;
     version?: long;
     version_type?: VersionType;
     wait_for_active_shards?: string;
     require_alias?: boolean;
   }
   body?: TDocument;
 }
```

Finally run the validation again:

```sh
make validate api=index branch=main
```

If there are no more errors, open a pull request with the fix.
