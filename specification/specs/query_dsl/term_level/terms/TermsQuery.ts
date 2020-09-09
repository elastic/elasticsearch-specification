@class_serializer("TermsQueryFormatter")
class TermsQuery extends QueryBase {
  terms: string[];
  index: IndexName;
  id: Id;
  path: string;
  routing: Routing
}
