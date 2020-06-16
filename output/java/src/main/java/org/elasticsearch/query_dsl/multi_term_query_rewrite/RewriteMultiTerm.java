
package org.elasticsearch.query_dsl.multi_term_query_rewrite;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RewriteMultiTerm implements XContentable<RewriteMultiTerm> {
  ConstantScore("constant_score"),
    ScoringBoolean("scoring_boolean"),
    ConstantScoreBoolean("constant_score_boolean"),
    TopTermsN("top_terms_N"),
    TopTermsBoostN("top_terms_boost_N"),
    TopTermsBlendedFreqsN("top_terms_blended_freqs_N");
  private final String textRepresentation;

  private RewriteMultiTerm(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RewriteMultiTerm fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RewriteMultiTerm, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "constant_score": return RewriteMultiTerm.ConstantScore;
      case "scoring_boolean": return RewriteMultiTerm.ScoringBoolean;
      case "constant_score_boolean": return RewriteMultiTerm.ConstantScoreBoolean;
      case "top_terms_N": return RewriteMultiTerm.TopTermsN;
      case "top_terms_boost_N": return RewriteMultiTerm.TopTermsBoostN;
      case "top_terms_blended_freqs_N": return RewriteMultiTerm.TopTermsBlendedFreqsN;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RewriteMultiTerm.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
