
export const normalizeTechName = (name: string): string => {
    let normalized = name.toLowerCase().trim();

    const ALIASES: Record<string, string> = {
        'js': 'javascript',
        'ts': 'typescript',
        'node': 'nodejs',
        'node.js': 'nodejs',
        'reactjs': 'react',
        'native': 'react-native', // dangerous but maybe?
        'cpp': 'cplusplus',
        'c++': 'cplusplus',
        'c#': 'csharp',
        'next': 'nextjs',
        'next.js': 'nextjs',
        'tg': 'telegram',
        'telegram api': 'telegram',
        'html5': 'html',
        'css3': 'css',
        'mongo': 'mongodb',
        'postgres': 'postgresql',
        'sk-learn': 'scikit-learn',
        'sklearn': 'scikit-learn',
        'scikit learn': 'scikit-learn',
        'tailwind': 'tailwindcss',
        'tailwind css': 'tailwindcss',
        'expo': 'expo',
        'arcore': 'arcore',
        'gemini': 'gemini',
        'gemini api': 'gemini',
        'spring': 'spring',
        'spring boot': 'spring',
    };

    if (ALIASES[normalized]) {
        return ALIASES[normalized];
    }

    // Remove punctuation (dots, etc), preserving alphanumeric, spaces, and hyphens (if any existed before)
    // Actually, usually users write "Node.js" -> remove '.' -> "Nodejs".
    // "C#" -> "C" (if bad regex).
    // "React-Native" -> "React-Native".

    // Requirement: "removes punctuation" AND "converts whitespace to hyphens".

    // 1. Convert whitespace to hyphens first to split words clearly?
    // "Scikit-Learn" -> "scikit-learn".
    // "React Native" -> "react-native".

    // 2. Remove non-alphanumeric except hyphen.
    // "Node.js" -> "Node.js" -> (hyphenate) "node.js" -> (remove non-word-hyphen) "nodejs".

    normalized = normalized.replace(/\s+/g, '-');
    normalized = normalized.replace(/[^\w-]/g, ''); // Remove anything that is not a word char or hyphen

    return normalized;
};
