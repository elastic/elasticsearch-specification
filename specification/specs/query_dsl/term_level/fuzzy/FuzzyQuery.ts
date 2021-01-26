@class_serializer('FuzzyQueryFormatter')
class FuzzyQuery extends QueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
}
