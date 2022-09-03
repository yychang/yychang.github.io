# Port Notes from Evernote to Obsidian

## Prerequisite

1. Download and install [Node.js](https://nodejs.org/en/download/)
    1. Because we will need to run `npx` later

## Steps 

1. Create a config JSON file with the content shown in the [[#Sample config JSON File]] section. Then modify the following fields as needed:
    1. "enexSources"
    2. "outputDir"
2. Run the following command:

    ```
    npx -p yarle-evernote-to-md@latest yarle --configFile <path_to_the_config.json>
    ```

Note:
* While the value of `enexSources` appears to be a list, `yarle` seems to work only if there is only one element in the list.

## Sample Config JSON File

```
{
    "enexSources": [
       "C:\\Temp\\Some_Exported_Notebook.enex"
       ],
    "outputDir": "C:\\Some\\Path\\To\\Obsidian\\Vault\\Folder",
    "isZettelkastenNeeded": true,
    "plainTextNotesOnly": false,
    "skipWebClips": false,
    "useHashTags": true,
    "outputFormat": "ObsidianMD",
    "urlEncodeFileNamesAndLinks": false,
    "skipEnexFileNameFromOutputPath": false,
    "monospaceIsCodeBlock": false,
    "keepMDCharactersOfENNotes": false,
    "keepOriginalAmountOfNewlines": false,
    "addExtensionToInternalLinks": true,
    "nestedTags": {
      "separatorInEN": "_",
      "replaceSeparatorWith": "/",
      "replaceSpaceWith": "-"
   },
   "resourcesDir": "resources",
   "turndownOptions": {
      "headingStyle": "atx"
   },
   "dateFormat": "YYYY-MM-DD",
   "haveEnexLevelResources": true,
   "haveGlobalResources": false,
    "logseqSettings":{
        "journalNotes": false
    },
   "obsidianSettings": {
      "omitLinkDisplayName": false
    }

}

```

## Reference

https://github.com/akosbalasko/yarle
