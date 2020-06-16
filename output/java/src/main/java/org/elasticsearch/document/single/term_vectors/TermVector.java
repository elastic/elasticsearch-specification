
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.document.single.term_vectors.*;

public class TermVector  implements XContentable<TermVector> {
  
  static final ParseField FIELD_STATISTICS = new ParseField("field_statistics");
  private FieldStatistics _fieldStatistics;
  public FieldStatistics getFieldStatistics() { return this._fieldStatistics; }
  public TermVector setFieldStatistics(FieldStatistics val) { this._fieldStatistics = val; return this; }


  static final ParseField TERMS = new ParseField("terms");
  private NamedContainer<String, TermVectorTerm> _terms;
  public NamedContainer<String, TermVectorTerm> getTerms() { return this._terms; }
  public TermVector setTerms(NamedContainer<String, TermVectorTerm> val) { this._terms = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fieldStatistics != null) {
      builder.field(FIELD_STATISTICS.getPreferredName());
      _fieldStatistics.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.field(TERMS.getPreferredName());
      _terms.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermVector fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVector.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVector, Void> PARSER =
    new ObjectParser<>(TermVector.class.getName(), false, TermVector::new);

  static {
    PARSER.declareObject(TermVector::setFieldStatistics, (p, t) -> FieldStatistics.PARSER.apply(p, t), FIELD_STATISTICS);
    PARSER.declareObject(TermVector::setTerms, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> TermVectorTerm.PARSER.apply(pp, null)), TERMS);
  }

}
