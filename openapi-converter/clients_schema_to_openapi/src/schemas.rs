use openapiv3::{ReferenceOr, Schema};
use clients_schema::ValueOf;

pub fn for_value_of(value_of: &ValueOf) -> anyhow::Result<ReferenceOr<Schema>> {
    // TODO
    Ok(ReferenceOr::ref_("foo"))
}
