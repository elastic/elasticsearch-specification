
package org.elasticsearch.query_dsl.term_level.terms_set;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_options.scripting.*;

public class TermsSetQuery  implements XContentable<TermsSetQuery> {
  
  static final ParseField MINIMUM_SHOULD_MATCH_FIELD = new ParseField("minimum_should_match_field");
  private Field _minimumShouldMatchField;
  public Field getMinimumShouldMatchField() { return this._minimumShouldMatchField; }
  public TermsSetQuery setMinimumShouldMatchField(Field val) { this._minimumShouldMatchField = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH_SCRIPT = new ParseField("minimum_should_match_script");
  private Script _minimumShouldMatchScript;
  public Script getMinimumShouldMatchScript() { return this._minimumShouldMatchScript; }
  public TermsSetQuery setMinimumShouldMatchScript(Script val) { this._minimumShouldMatchScript = val; return this; }


  static final ParseField TERMS = new ParseField("terms");
  private List<Object> _terms;
  public List<Object> getTerms() { return this._terms; }
  public TermsSetQuery setTerms(List<Object> val) { this._terms = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_minimumShouldMatchField != null) {
      builder.field(MINIMUM_SHOULD_MATCH_FIELD.getPreferredName());
      _minimumShouldMatchField.toXContent(builder, params);
    }
    if (_minimumShouldMatchScript != null) {
      builder.field(MINIMUM_SHOULD_MATCH_SCRIPT.getPreferredName());
      _minimumShouldMatchScript.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.array(TERMS.getPreferredName(), _terms);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermsSetQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsSetQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsSetQuery, Void> PARSER =
    new ObjectParser<>(TermsSetQuery.class.getName(), false, TermsSetQuery::new);

  static {
    PARSER.declareObject(TermsSetQuery::setMinimumShouldMatchField, (p, t) -> Field.createFrom(p), MINIMUM_SHOULD_MATCH_FIELD);
    PARSER.declareObject(TermsSetQuery::setMinimumShouldMatchScript, (p, t) -> Script.PARSER.apply(p, t), MINIMUM_SHOULD_MATCH_SCRIPT);
    PARSER.declareObjectArray(TermsSetQuery::setTerms, (p, t) -> p.objectText(), TERMS);
  }

}
