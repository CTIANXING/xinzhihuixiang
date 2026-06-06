/**
 * Browser bundle entry - exports everything the game UI needs.
 */
export { createSillytavernStore, sillytavernStore } from './vanilla/sillytavern-store';
export { initializeDatabase, getSettings, saveSettings, getLorebooks, saveLorebook, deleteLorebook, getPresets, savePreset, deletePreset, getChats, saveChat, deleteChat, exportAllData, importAllData } from './sillytavern/database';
export { assemblePrompt, replaceMacros, SUPPORTED_MACROS } from './sillytavern/prompt-assembler';
export { createLorebookEngine } from './sillytavern/lorebook-engine';
export { extractVariables, mergeVariables, formatVariablesForPrompt, USER_ROLE, truncateChatAt, branchChat, aggregateEvents, applyParsedToChat } from './sillytavern/variables';
export { StreamTagParser } from './sillytavern/stream-parser';
export type { ParserEvent } from './sillytavern/stream-parser';
export { parseVarsBlock, applyVarsPatch } from './sillytavern/vars-merger';
export { createApiRouter } from './sillytavern/api-router';
export type { ApiRouter } from './sillytavern/api-router';
export { fetchModels, testConnection, getFallbackModels } from './sillytavern/api-tools';
export { createDefaultPreset, DEFAULT_SETTINGS, DEFAULT_TAGS, DEFAULT_OPAQUE_TAGS, DEFAULT_PROMPT_ORDER, DEFAULT_FORMAT_PROMPT } from './sillytavern/types';
export type { Lorebook, LorebookEntry, ChatPreset, AppSettings, ApiSettings, ChatMessage, ChatSession, MatchedEntry, ParsedTags, VarsPatch, Task, ApiTarget, SillyTavernLorebookExport } from './sillytavern/types';
export { importLorebook, exportLorebook, importPreset, exportPreset, importJsonFile, exportToJson, importMultipleLorebooks, renameLorebook } from './sillytavern/importer';
export { createDefaultEntry, createDefaultLorebook, applyEntryDefaults, updateEntry, removeEntry, movePromptItem, clampNumber } from './sillytavern/editor-utils';
