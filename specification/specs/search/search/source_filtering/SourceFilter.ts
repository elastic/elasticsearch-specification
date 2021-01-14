@class_serializer("SourceFilterFormatter")
class SourceFilter {
  excludes?: Fields;
  includes?: Fields;
}

class DocValueField {
  field: Field;
  format?: string;
}
