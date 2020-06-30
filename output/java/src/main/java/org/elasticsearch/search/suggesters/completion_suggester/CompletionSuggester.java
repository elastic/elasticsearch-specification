
package org.elasticsearch.search.suggesters.completion_suggester;

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
import org.elasticsearch.search.suggesters.context_suggester.*;
import org.elasticsearch.search.suggesters.completion_suggester.*;

public class CompletionSuggester  implements XContentable<CompletionSuggester> {
  
  static final ParseField CONTEXTS = new ParseField("contexts");
  private NamedContainer<String, List<SuggestContextQuery>> _contexts;
  public NamedContainer<String, List<SuggestContextQuery>> getContexts() { return this._contexts; }
  public CompletionSuggester setContexts(NamedContainer<String, List<SuggestContextQuery>> val) { this._contexts = val; return this; }


  static final ParseField FUZZY = new ParseField("fuzzy");
  private SuggestFuzziness _fuzzy;
  public SuggestFuzziness getFuzzy() { return this._fuzzy; }
  public CompletionSuggester setFuzzy(SuggestFuzziness val) { this._fuzzy = val; return this; }


  static final ParseField PREFIX = new ParseField("prefix");
  private String _prefix;
  public String getPrefix() { return this._prefix; }
  public CompletionSuggester setPrefix(String val) { this._prefix = val; return this; }


  static final ParseField REGEX = new ParseField("regex");
  private String _regex;
  public String getRegex() { return this._regex; }
  public CompletionSuggester setRegex(String val) { this._regex = val; return this; }


  static final ParseField SKIP_DUPLICATES = new ParseField("skip_duplicates");
  private Boolean _skipDuplicates;
  public Boolean getSkipDuplicates() { return this._skipDuplicates; }
  public CompletionSuggester setSkipDuplicates(Boolean val) { this._skipDuplicates = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_contexts != null) {
      builder.field(CONTEXTS.getPreferredName());
      _contexts.toXContent(builder, params);
    }
    if (_fuzzy != null) {
      builder.field(FUZZY.getPreferredName());
      _fuzzy.toXContent(builder, params);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
    if (_regex != null) {
      builder.field(REGEX.getPreferredName(), _regex);
    }
    if (_skipDuplicates != null) {
      builder.field(SKIP_DUPLICATES.getPreferredName(), _skipDuplicates);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CompletionSuggester fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompletionSuggester.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompletionSuggester, Void> PARSER =
    new ObjectParser<>(CompletionSuggester.class.getName(), false, CompletionSuggester::new);

  static {
    PARSER.declareObject(CompletionSuggester::setContexts, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<SuggestContextQuery> */), CONTEXTS);
    PARSER.declareObject(CompletionSuggester::setFuzzy, (p, t) -> SuggestFuzziness.PARSER.apply(p, t), FUZZY);
    PARSER.declareString(CompletionSuggester::setPrefix, PREFIX);
    PARSER.declareString(CompletionSuggester::setRegex, REGEX);
    PARSER.declareBoolean(CompletionSuggester::setSkipDuplicates, SKIP_DUPLICATES);
  }

}
