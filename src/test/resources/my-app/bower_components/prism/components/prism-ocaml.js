Prism.languages.ocaml = {
	'comment': /\(\*[\s\S]*?\*\)/,
	'string': [
		/"(?:\\.|[^\\\r\n"])*"/,
		/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i
	],
	'number': /\b-?(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
	'type': {
		pattern: /\B['`][a-z\d_]*/i,
		alias: 'variable'
	},
	'directive': {
		pattern: /\B#[a-z\d_]+/i,
		alias: 'function'
	},
	'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
	'boolean': /\b(?:false|true)\b/,
	// Custom operators are allowed
	'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&\*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
	'punctuation': /[(){}\[\]|_.,:;]/
};