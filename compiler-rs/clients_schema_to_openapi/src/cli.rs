use std::path::PathBuf;
use argh::FromArgs;
use clients_schema::Flavor;
use crate::Configuration;

/// Convert schema.json to an OpenAPI schema
#[derive(Debug, FromArgs)]
pub struct Cli {
    /// schema file to transform.
    #[argh(option)]
    pub schema: PathBuf,

    /// output file.
    #[argh(option)]
    pub output: PathBuf,

    //---- Fields from lib::Configuration

    /// the flavor to generate [all, stack, serverless - default = all]
    #[argh(option, default = "SchemaFlavor::All")]
    pub flavor: SchemaFlavor,

    /// add enum descriptions to property descriptions [default = true]
    #[argh(option, default = "true")]
    pub lift_enum_descriptions: bool,

    /// generate only this namespace (can be repeated)
    #[argh(option)]
    pub namespace: Vec<String>,
}

use derive_more::FromStr;

#[derive(Debug, Clone, PartialEq, FromStr)]
pub enum SchemaFlavor {
    /// No schema filtering
    All,
    /// Stack (stateful) flavor
    Stack,
    /// Serverless flavor
    Serverless,
}

impl From<Cli> for Configuration {
    fn from(val: Cli) -> Configuration {
        let flavor = match val.flavor {
            SchemaFlavor::All => None,
            SchemaFlavor::Serverless => Some(Flavor::Serverless),
            SchemaFlavor::Stack => Some(Flavor::Stack),
        };

        Configuration {
            flavor,
            lift_enum_descriptions: val.lift_enum_descriptions,
            namespaces: if val.namespace.is_empty() {
                None
            } else {
                Some(val.namespace)
            },
        }
    }
}
