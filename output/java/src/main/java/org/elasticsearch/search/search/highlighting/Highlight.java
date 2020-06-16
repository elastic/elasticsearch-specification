
package org.elasticsearch.search.search.highlighting;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class Highlight  implements XContentable<Highlight> {
  
  static final ParseField BOUNDARY_CHARS = new ParseField("boundary_chars");
  private String _boundaryChars;
  public String getBoundaryChars() { return this._boundaryChars; }
  public Highlight setBoundaryChars(String val) { this._boundaryChars = val; return this; }


  static final ParseField BOUNDARY_MAX_SCAN = new ParseField("boundary_max_scan");
  private Integer _boundaryMaxScan;
  public Integer getBoundaryMaxScan() { return this._boundaryMaxScan; }
  public Highlight setBoundaryMaxScan(Integer val) { this._boundaryMaxScan = val; return this; }


  static final ParseField BOUNDARY_SCANNER = new ParseField("boundary_scanner");
  private BoundaryScanner _boundaryScanner;
  public BoundaryScanner getBoundaryScanner() { return this._boundaryScanner; }
  public Highlight setBoundaryScanner(BoundaryScanner val) { this._boundaryScanner = val; return this; }


  static final ParseField BOUNDARY_SCANNER_LOCALE = new ParseField("boundary_scanner_locale");
  private String _boundaryScannerLocale;
  public String getBoundaryScannerLocale() { return this._boundaryScannerLocale; }
  public Highlight setBoundaryScannerLocale(String val) { this._boundaryScannerLocale = val; return this; }


  static final ParseField ENCODER = new ParseField("encoder");
  private HighlighterEncoder _encoder;
  public HighlighterEncoder getEncoder() { return this._encoder; }
  public Highlight setEncoder(HighlighterEncoder val) { this._encoder = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<Field, HighlightField> _fields;
  public NamedContainer<Field, HighlightField> getFields() { return this._fields; }
  public Highlight setFields(NamedContainer<Field, HighlightField> val) { this._fields = val; return this; }


  static final ParseField FRAGMENTER = new ParseField("fragmenter");
  private HighlighterFragmenter _fragmenter;
  public HighlighterFragmenter getFragmenter() { return this._fragmenter; }
  public Highlight setFragmenter(HighlighterFragmenter val) { this._fragmenter = val; return this; }


  static final ParseField FRAGMENT_OFFSET = new ParseField("fragment_offset");
  private Integer _fragmentOffset;
  public Integer getFragmentOffset() { return this._fragmentOffset; }
  public Highlight setFragmentOffset(Integer val) { this._fragmentOffset = val; return this; }


  static final ParseField FRAGMENT_SIZE = new ParseField("fragment_size");
  private Integer _fragmentSize;
  public Integer getFragmentSize() { return this._fragmentSize; }
  public Highlight setFragmentSize(Integer val) { this._fragmentSize = val; return this; }


  static final ParseField MAX_FRAGMENT_LENGTH = new ParseField("max_fragment_length");
  private Integer _maxFragmentLength;
  public Integer getMaxFragmentLength() { return this._maxFragmentLength; }
  public Highlight setMaxFragmentLength(Integer val) { this._maxFragmentLength = val; return this; }


  static final ParseField NO_MATCH_SIZE = new ParseField("no_match_size");
  private Integer _noMatchSize;
  public Integer getNoMatchSize() { return this._noMatchSize; }
  public Highlight setNoMatchSize(Integer val) { this._noMatchSize = val; return this; }


  static final ParseField NUMBER_OF_FRAGMENTS = new ParseField("number_of_fragments");
  private Integer _numberOfFragments;
  public Integer getNumberOfFragments() { return this._numberOfFragments; }
  public Highlight setNumberOfFragments(Integer val) { this._numberOfFragments = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private HighlighterOrder _order;
  public HighlighterOrder getOrder() { return this._order; }
  public Highlight setOrder(HighlighterOrder val) { this._order = val; return this; }


  static final ParseField POST_TAGS = new ParseField("post_tags");
  private List<String> _postTags;
  public List<String> getPostTags() { return this._postTags; }
  public Highlight setPostTags(List<String> val) { this._postTags = val; return this; }


  static final ParseField PRE_TAGS = new ParseField("pre_tags");
  private List<String> _preTags;
  public List<String> getPreTags() { return this._preTags; }
  public Highlight setPreTags(List<String> val) { this._preTags = val; return this; }


  static final ParseField REQUIRE_FIELD_MATCH = new ParseField("require_field_match");
  private Boolean _requireFieldMatch;
  public Boolean getRequireFieldMatch() { return this._requireFieldMatch; }
  public Highlight setRequireFieldMatch(Boolean val) { this._requireFieldMatch = val; return this; }


  static final ParseField TAGS_SCHEMA = new ParseField("tags_schema");
  private HighlighterTagsSchema _tagsSchema;
  public HighlighterTagsSchema getTagsSchema() { return this._tagsSchema; }
  public Highlight setTagsSchema(HighlighterTagsSchema val) { this._tagsSchema = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boundaryChars != null) {
      builder.field(BOUNDARY_CHARS.getPreferredName(), _boundaryChars);
    }
    if (_boundaryMaxScan != null) {
      builder.field(BOUNDARY_MAX_SCAN.getPreferredName(), _boundaryMaxScan);
    }
    if (_boundaryScanner != null) {
      builder.field(BOUNDARY_SCANNER.getPreferredName());
      _boundaryScanner.toXContent(builder, params);
    }
    if (_boundaryScannerLocale != null) {
      builder.field(BOUNDARY_SCANNER_LOCALE.getPreferredName(), _boundaryScannerLocale);
    }
    if (_encoder != null) {
      builder.field(ENCODER.getPreferredName());
      _encoder.toXContent(builder, params);
    }
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_fragmenter != null) {
      builder.field(FRAGMENTER.getPreferredName());
      _fragmenter.toXContent(builder, params);
    }
    if (_fragmentOffset != null) {
      builder.field(FRAGMENT_OFFSET.getPreferredName(), _fragmentOffset);
    }
    if (_fragmentSize != null) {
      builder.field(FRAGMENT_SIZE.getPreferredName(), _fragmentSize);
    }
    if (_maxFragmentLength != null) {
      builder.field(MAX_FRAGMENT_LENGTH.getPreferredName(), _maxFragmentLength);
    }
    if (_noMatchSize != null) {
      builder.field(NO_MATCH_SIZE.getPreferredName(), _noMatchSize);
    }
    if (_numberOfFragments != null) {
      builder.field(NUMBER_OF_FRAGMENTS.getPreferredName(), _numberOfFragments);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_postTags != null) {
      builder.array(POST_TAGS.getPreferredName(), _postTags);
    }
    if (_preTags != null) {
      builder.array(PRE_TAGS.getPreferredName(), _preTags);
    }
    if (_requireFieldMatch != null) {
      builder.field(REQUIRE_FIELD_MATCH.getPreferredName(), _requireFieldMatch);
    }
    if (_tagsSchema != null) {
      builder.field(TAGS_SCHEMA.getPreferredName());
      _tagsSchema.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Highlight fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Highlight.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Highlight, Void> PARSER =
    new ObjectParser<>(Highlight.class.getName(), false, Highlight::new);

  static {
    PARSER.declareString(Highlight::setBoundaryChars, BOUNDARY_CHARS);
    PARSER.declareInt(Highlight::setBoundaryMaxScan, BOUNDARY_MAX_SCAN);
    PARSER.declareField(Highlight::setBoundaryScanner, (p, t) -> BoundaryScanner.PARSER.apply(p), BOUNDARY_SCANNER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(Highlight::setBoundaryScannerLocale, BOUNDARY_SCANNER_LOCALE);
    PARSER.declareField(Highlight::setEncoder, (p, t) -> HighlighterEncoder.PARSER.apply(p), ENCODER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(Highlight::setFields, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> HighlightField.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareField(Highlight::setFragmenter, (p, t) -> HighlighterFragmenter.PARSER.apply(p), FRAGMENTER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(Highlight::setFragmentOffset, FRAGMENT_OFFSET);
    PARSER.declareInt(Highlight::setFragmentSize, FRAGMENT_SIZE);
    PARSER.declareInt(Highlight::setMaxFragmentLength, MAX_FRAGMENT_LENGTH);
    PARSER.declareInt(Highlight::setNoMatchSize, NO_MATCH_SIZE);
    PARSER.declareInt(Highlight::setNumberOfFragments, NUMBER_OF_FRAGMENTS);
    PARSER.declareField(Highlight::setOrder, (p, t) -> HighlighterOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareStringArray(Highlight::setPostTags, POST_TAGS);
    PARSER.declareStringArray(Highlight::setPreTags, PRE_TAGS);
    PARSER.declareBoolean(Highlight::setRequireFieldMatch, REQUIRE_FIELD_MATCH);
    PARSER.declareField(Highlight::setTagsSchema, (p, t) -> HighlighterTagsSchema.PARSER.apply(p), TAGS_SCHEMA, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
