
package org.elasticsearch.analysis.token_filters.synonym;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.synonym.*;
import org.elasticsearch.analysis.token_filters.*;

public class SynonymTokenFilter extends TokenFilterBase implements XContentable<SynonymTokenFilter> {
  
  static final ParseField EXPAND = new ParseField("expand");
  private Boolean _expand;
  public Boolean getExpand() { return this._expand; }
  public SynonymTokenFilter setExpand(Boolean val) { this._expand = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private SynonymFormat _format;
  public SynonymFormat getFormat() { return this._format; }
  public SynonymTokenFilter setFormat(SynonymFormat val) { this._format = val; return this; }

  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public SynonymTokenFilter setLenient(Boolean val) { this._lenient = val; return this; }

  static final ParseField SYNONYMS = new ParseField("synonyms");
  private List<String> _synonyms;
  public List<String> getSynonyms() { return this._synonyms; }
  public SynonymTokenFilter setSynonyms(List<String> val) { this._synonyms = val; return this; }

  static final ParseField SYNONYMS_PATH = new ParseField("synonyms_path");
  private String _synonymsPath;
  public String getSynonymsPath() { return this._synonymsPath; }
  public SynonymTokenFilter setSynonymsPath(String val) { this._synonymsPath = val; return this; }

  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private String _tokenizer;
  public String getTokenizer() { return this._tokenizer; }
  public SynonymTokenFilter setTokenizer(String val) { this._tokenizer = val; return this; }

  static final ParseField UPDATEABLE = new ParseField("updateable");
  private Boolean _updateable;
  public Boolean getUpdateable() { return this._updateable; }
  public SynonymTokenFilter setUpdateable(Boolean val) { this._updateable = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_expand != null) {
      builder.field(EXPAND.getPreferredName(), _expand);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName());
      _format.toXContent(builder, params);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_synonyms != null) {
      builder.array(SYNONYMS.getPreferredName(), _synonyms);
    }
    if (_synonymsPath != null) {
      builder.field(SYNONYMS_PATH.getPreferredName(), _synonymsPath);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName(), _tokenizer);
    }
    if (_updateable != null) {
      builder.field(UPDATEABLE.getPreferredName(), _updateable);
    }
  }

  @Override
  public SynonymTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SynonymTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SynonymTokenFilter, Void> PARSER =
    new ObjectParser<>(SynonymTokenFilter.class.getName(), false, SynonymTokenFilter::new);

  static {
    PARSER.declareBoolean(SynonymTokenFilter::setExpand, EXPAND);
    PARSER.declareField(SynonymTokenFilter::setFormat, (p, t) -> SynonymFormat.PARSER.apply(p), FORMAT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SynonymTokenFilter::setLenient, LENIENT);
    PARSER.declareStringArray(SynonymTokenFilter::setSynonyms, SYNONYMS);
    PARSER.declareString(SynonymTokenFilter::setSynonymsPath, SYNONYMS_PATH);
    PARSER.declareString(SynonymTokenFilter::setTokenizer, TOKENIZER);
    PARSER.declareBoolean(SynonymTokenFilter::setUpdateable, UPDATEABLE);
  }

}
