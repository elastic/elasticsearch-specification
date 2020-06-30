
package org.elasticsearch.search.suggesters;

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
import org.elasticsearch.search.suggesters.completion_suggester.*;
import org.elasticsearch.search.suggesters.phrase_suggester.*;
import org.elasticsearch.search.suggesters.term_suggester.*;

public class SuggestBucket  implements XContentable<SuggestBucket> {
  
  static final ParseField COMPLETION = new ParseField("completion");
  private CompletionSuggester _completion;
  public CompletionSuggester getCompletion() { return this._completion; }
  public SuggestBucket setCompletion(CompletionSuggester val) { this._completion = val; return this; }


  static final ParseField PHRASE = new ParseField("phrase");
  private PhraseSuggester _phrase;
  public PhraseSuggester getPhrase() { return this._phrase; }
  public SuggestBucket setPhrase(PhraseSuggester val) { this._phrase = val; return this; }


  static final ParseField PREFIX = new ParseField("prefix");
  private String _prefix;
  public String getPrefix() { return this._prefix; }
  public SuggestBucket setPrefix(String val) { this._prefix = val; return this; }


  static final ParseField REGEX = new ParseField("regex");
  private String _regex;
  public String getRegex() { return this._regex; }
  public SuggestBucket setRegex(String val) { this._regex = val; return this; }


  static final ParseField TERM = new ParseField("term");
  private TermSuggester _term;
  public TermSuggester getTerm() { return this._term; }
  public SuggestBucket setTerm(TermSuggester val) { this._term = val; return this; }


  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public SuggestBucket setText(String val) { this._text = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_completion != null) {
      builder.field(COMPLETION.getPreferredName());
      _completion.toXContent(builder, params);
    }
    if (_phrase != null) {
      builder.field(PHRASE.getPreferredName());
      _phrase.toXContent(builder, params);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
    if (_regex != null) {
      builder.field(REGEX.getPreferredName(), _regex);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName());
      _term.toXContent(builder, params);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SuggestBucket fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestBucket.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestBucket, Void> PARSER =
    new ObjectParser<>(SuggestBucket.class.getName(), false, SuggestBucket::new);

  static {
    PARSER.declareObject(SuggestBucket::setCompletion, (p, t) -> CompletionSuggester.PARSER.apply(p, t), COMPLETION);
    PARSER.declareObject(SuggestBucket::setPhrase, (p, t) -> PhraseSuggester.PARSER.apply(p, t), PHRASE);
    PARSER.declareString(SuggestBucket::setPrefix, PREFIX);
    PARSER.declareString(SuggestBucket::setRegex, REGEX);
    PARSER.declareObject(SuggestBucket::setTerm, (p, t) -> TermSuggester.PARSER.apply(p, t), TERM);
    PARSER.declareString(SuggestBucket::setText, TEXT);
  }

}
