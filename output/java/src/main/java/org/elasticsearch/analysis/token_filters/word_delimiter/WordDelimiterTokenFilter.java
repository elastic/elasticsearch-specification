
package org.elasticsearch.analysis.token_filters.word_delimiter;

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


public class WordDelimiterTokenFilter  implements XContentable<WordDelimiterTokenFilter> {
  
  static final ParseField CATENATE_ALL = new ParseField("catenate_all");
  private Boolean _catenateAll;
  public Boolean getCatenateAll() { return this._catenateAll; }
  public WordDelimiterTokenFilter setCatenateAll(Boolean val) { this._catenateAll = val; return this; }


  static final ParseField CATENATE_NUMBERS = new ParseField("catenate_numbers");
  private Boolean _catenateNumbers;
  public Boolean getCatenateNumbers() { return this._catenateNumbers; }
  public WordDelimiterTokenFilter setCatenateNumbers(Boolean val) { this._catenateNumbers = val; return this; }


  static final ParseField CATENATE_WORDS = new ParseField("catenate_words");
  private Boolean _catenateWords;
  public Boolean getCatenateWords() { return this._catenateWords; }
  public WordDelimiterTokenFilter setCatenateWords(Boolean val) { this._catenateWords = val; return this; }


  static final ParseField GENERATE_NUMBER_PARTS = new ParseField("generate_number_parts");
  private Boolean _generateNumberParts;
  public Boolean getGenerateNumberParts() { return this._generateNumberParts; }
  public WordDelimiterTokenFilter setGenerateNumberParts(Boolean val) { this._generateNumberParts = val; return this; }


  static final ParseField GENERATE_WORD_PARTS = new ParseField("generate_word_parts");
  private Boolean _generateWordParts;
  public Boolean getGenerateWordParts() { return this._generateWordParts; }
  public WordDelimiterTokenFilter setGenerateWordParts(Boolean val) { this._generateWordParts = val; return this; }


  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public WordDelimiterTokenFilter setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  static final ParseField PROTECTED_WORDS = new ParseField("protected_words");
  private List<String> _protectedWords;
  public List<String> getProtectedWords() { return this._protectedWords; }
  public WordDelimiterTokenFilter setProtectedWords(List<String> val) { this._protectedWords = val; return this; }


  static final ParseField PROTECTED_WORDS_PATH = new ParseField("protected_words_path");
  private String _protectedWordsPath;
  public String getProtectedWordsPath() { return this._protectedWordsPath; }
  public WordDelimiterTokenFilter setProtectedWordsPath(String val) { this._protectedWordsPath = val; return this; }


  static final ParseField SPLIT_ON_CASE_CHANGE = new ParseField("split_on_case_change");
  private Boolean _splitOnCaseChange;
  public Boolean getSplitOnCaseChange() { return this._splitOnCaseChange; }
  public WordDelimiterTokenFilter setSplitOnCaseChange(Boolean val) { this._splitOnCaseChange = val; return this; }


  static final ParseField SPLIT_ON_NUMERICS = new ParseField("split_on_numerics");
  private Boolean _splitOnNumerics;
  public Boolean getSplitOnNumerics() { return this._splitOnNumerics; }
  public WordDelimiterTokenFilter setSplitOnNumerics(Boolean val) { this._splitOnNumerics = val; return this; }


  static final ParseField STEM_ENGLISH_POSSESSIVE = new ParseField("stem_english_possessive");
  private Boolean _stemEnglishPossessive;
  public Boolean getStemEnglishPossessive() { return this._stemEnglishPossessive; }
  public WordDelimiterTokenFilter setStemEnglishPossessive(Boolean val) { this._stemEnglishPossessive = val; return this; }


  static final ParseField TYPE_TABLE = new ParseField("type_table");
  private List<String> _typeTable;
  public List<String> getTypeTable() { return this._typeTable; }
  public WordDelimiterTokenFilter setTypeTable(List<String> val) { this._typeTable = val; return this; }


  static final ParseField TYPE_TABLE_PATH = new ParseField("type_table_path");
  private String _typeTablePath;
  public String getTypeTablePath() { return this._typeTablePath; }
  public WordDelimiterTokenFilter setTypeTablePath(String val) { this._typeTablePath = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_catenateAll != null) {
      builder.field(CATENATE_ALL.getPreferredName(), _catenateAll);
    }
    if (_catenateNumbers != null) {
      builder.field(CATENATE_NUMBERS.getPreferredName(), _catenateNumbers);
    }
    if (_catenateWords != null) {
      builder.field(CATENATE_WORDS.getPreferredName(), _catenateWords);
    }
    if (_generateNumberParts != null) {
      builder.field(GENERATE_NUMBER_PARTS.getPreferredName(), _generateNumberParts);
    }
    if (_generateWordParts != null) {
      builder.field(GENERATE_WORD_PARTS.getPreferredName(), _generateWordParts);
    }
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
    if (_protectedWords != null) {
      builder.array(PROTECTED_WORDS.getPreferredName(), _protectedWords);
    }
    if (_protectedWordsPath != null) {
      builder.field(PROTECTED_WORDS_PATH.getPreferredName(), _protectedWordsPath);
    }
    if (_splitOnCaseChange != null) {
      builder.field(SPLIT_ON_CASE_CHANGE.getPreferredName(), _splitOnCaseChange);
    }
    if (_splitOnNumerics != null) {
      builder.field(SPLIT_ON_NUMERICS.getPreferredName(), _splitOnNumerics);
    }
    if (_stemEnglishPossessive != null) {
      builder.field(STEM_ENGLISH_POSSESSIVE.getPreferredName(), _stemEnglishPossessive);
    }
    if (_typeTable != null) {
      builder.array(TYPE_TABLE.getPreferredName(), _typeTable);
    }
    if (_typeTablePath != null) {
      builder.field(TYPE_TABLE_PATH.getPreferredName(), _typeTablePath);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WordDelimiterTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WordDelimiterTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WordDelimiterTokenFilter, Void> PARSER =
    new ObjectParser<>(WordDelimiterTokenFilter.class.getName(), false, WordDelimiterTokenFilter::new);

  static {
    PARSER.declareBoolean(WordDelimiterTokenFilter::setCatenateAll, CATENATE_ALL);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setCatenateNumbers, CATENATE_NUMBERS);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setCatenateWords, CATENATE_WORDS);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setGenerateNumberParts, GENERATE_NUMBER_PARTS);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setGenerateWordParts, GENERATE_WORD_PARTS);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setPreserveOriginal, PRESERVE_ORIGINAL);
    PARSER.declareStringArray(WordDelimiterTokenFilter::setProtectedWords, PROTECTED_WORDS);
    PARSER.declareString(WordDelimiterTokenFilter::setProtectedWordsPath, PROTECTED_WORDS_PATH);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setSplitOnCaseChange, SPLIT_ON_CASE_CHANGE);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setSplitOnNumerics, SPLIT_ON_NUMERICS);
    PARSER.declareBoolean(WordDelimiterTokenFilter::setStemEnglishPossessive, STEM_ENGLISH_POSSESSIVE);
    PARSER.declareStringArray(WordDelimiterTokenFilter::setTypeTable, TYPE_TABLE);
    PARSER.declareString(WordDelimiterTokenFilter::setTypeTablePath, TYPE_TABLE_PATH);
  }

}
