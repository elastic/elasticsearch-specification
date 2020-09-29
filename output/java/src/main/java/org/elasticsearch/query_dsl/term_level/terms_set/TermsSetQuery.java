
package org.elasticsearch.query_dsl.term_level.terms_set;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class TermsSetQuery extends QueryBase implements XContentable<TermsSetQuery> {
  
  static final ParseField MINIMUM_SHOULD_MATCH_FIELD = new ParseField("minimum_should_match_field");
  private String _minimumShouldMatchField;
  public String getMinimumShouldMatchField() { return this._minimumShouldMatchField; }
  public TermsSetQuery setMinimumShouldMatchField(String val) { this._minimumShouldMatchField = val; return this; }

  static final ParseField MINIMUM_SHOULD_MATCH_SCRIPT = new ParseField("minimum_should_match_script");
  private Script _minimumShouldMatchScript;
  public Script getMinimumShouldMatchScript() { return this._minimumShouldMatchScript; }
  public TermsSetQuery setMinimumShouldMatchScript(Script val) { this._minimumShouldMatchScript = val; return this; }

  static final ParseField TERMS = new ParseField("terms");
  private List<String> _terms;
  public List<String> getTerms() { return this._terms; }
  public TermsSetQuery setTerms(List<String> val) { this._terms = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_minimumShouldMatchField != null) {
      builder.field(MINIMUM_SHOULD_MATCH_FIELD.getPreferredName(), _minimumShouldMatchField);
    }
    if (_minimumShouldMatchScript != null) {
      builder.field(MINIMUM_SHOULD_MATCH_SCRIPT.getPreferredName());
      _minimumShouldMatchScript.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.array(TERMS.getPreferredName(), _terms);
    }
  }

  @Override
  public TermsSetQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsSetQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsSetQuery, Void> PARSER =
    new ObjectParser<>(TermsSetQuery.class.getName(), false, TermsSetQuery::new);

  static {
    PARSER.declareString(TermsSetQuery::setMinimumShouldMatchField, MINIMUM_SHOULD_MATCH_FIELD);
    PARSER.declareObject(TermsSetQuery::setMinimumShouldMatchScript, (p, t) -> Script.PARSER.apply(p, t), MINIMUM_SHOULD_MATCH_SCRIPT);
    PARSER.declareStringArray(TermsSetQuery::setTerms, TERMS);
  }

}
