class TemplateMapping {
  aliases: Dictionary<IndexName, Alias>;
  index_patterns: string[];
  mappings: TypeMapping;
  order: integer;
  settings: Dictionary<string, any>;
  version: integer;
}
