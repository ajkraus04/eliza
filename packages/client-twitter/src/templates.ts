export const priceActionTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a technical analysis post for {{ticker}}
Write a concise price action  or volume analysis from the perspective of {{agentName}}. Focus on key technical levels and patterns.

Consider:
- Chart patterns and trend lines
- Volume analysis
- Key support/resistance levels
- Technical indicators (RSI, MACD, etc.)
- Price targets

#Price Event:
{{content}}

#Current Stock Price:
{{currentStockPrice}}


Your response should be technically focused. No questions or emojis. Use \\n\\n for spacing between points. Response should be 1-3 sentences.`;

export const newFilingTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a filing analysis post for {{ticker}}
Write a post that is {{adjective}} about {{ticker}}, from the perspective of {{agentName}}. Do not add commentary or acknowledge this request, just write the post.
Do not try and add any styling to the post like bold, italic, or other formatting.

Whenever a ticker is mentioned add a $ symbol in front of it.


Consider:
- Key financial metrics (revenue, profit margins, growth rates)
- Recent price movements and trading volume
- Industry context and competitive position
- Technical analysis indicators
- Future outlook and potential catalysts

#Latest Financial summary:
{{content}}

# Latest Financial Data:
{{metadata}}

#Current Stock Price:
{{currentStockPrice}}


Start every post with the $ticker and current price: \${{ticker}}: \${{currentStockPrice}} and whether or not you are "bullish" or "bearish" or "neutral" on the stock. Make sure in the analysis to explain why you gave it that rating.
Next present the tweet in a format that explains this is the latest 10K or 10Q filing.

Your response should not contain any questions. Brief, concise statements only. No emojis. Use \\n\\n (double spaces) between statements if there are multiple statements in your response.

Your response should highlight material information only. No questions or emojis. Use \\n\\n for spacing between points.`;

export const sentimentTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a sentiment analysis post for {{ticker}}
Write a concise sentiment analysis from the perspective of {{agentName}}. Focus on market psychology and positioning.

Consider:
- Institutional sentiment
- Retail sentiment
- Options flow
- Short interest
- Social media trends

#Sentiment Data:
{{sentimentData}}

#Current Stock Price:
{{currentStockPrice}}

Your response should be data-driven and objective. No questions or emojis. Use \\n\\n for spacing between points. Response should be 1-2 sentences at most.`;

export const competitiveAnalysisTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a competitive analysis post for {{ticker}}
Write a concise competitive analysis from the perspective of {{agentName}}. Focus on market position and industry dynamics.

Consider:
- Market share trends
- Competitive advantages
- Industry growth rates
- Peer comparisons
- Threats and opportunities

#Industry Analysis:
{{industryAnalysis}}

#Current Stock Price:
{{currentStockPrice}}

#Peer Comparison:
{{peerComparison}}

Your response should be analytical and comparative. No questions or emojis. Use \\n\\n for spacing between points.`;


export const twitterPostTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}
{{topics}}

# Providers:
{{providers}}

{{characterPostExamples}}

{{postDirections}}

# Task: Generate a post in the voice and style and perspective of {{agentName}} @{{twitterUserName}}.
Write a post that is {{adjective}} about {{ticker}}, from the perspective of {{agentName}}. Do not add commentary or acknowledge this request, just write the post.
Do not try and add any styling to the post like bold, italic, or other formatting.

Whenever a ticker is mentioned add a $ symbol in front of it.


Consider:
- Key financial metrics (revenue, profit margins, growth rates)
- Recent price movements and trading volume
- Notable news and events
- Industry context and competitive position
- Technical analysis indicators
- Future outlook and potential catalysts
- Competitive analysis

#Financials Summary:
{{financialSummary}}

#Technical Analysis:
{{technicalAnalysis}}

#Current Stock Price:
{{currentStockPrice}}

#News:
{{news}}

#Stock Analysis:
{{stockAnalysis}}

#Competitive Analysis:
{{competitiveAnalysis}}

Start every post with the $ticker and current price: \${{ticker}}: \${{currentStockPrice}} and whether or not you are "bullish" or "bearish" or "neutral" on the stock. Make sure in the analysis to explain why you gave it that rating.

Your response should not contain any questions. Brief, concise statements only. No emojis. Use \\n\\n (double spaces) between statements if there are multiple statements in your response.

The post should be accessible to retail investors. The first paragaph should be two sentences describing what the company does in a TLDR format. Focus on the most important information that drives investment decisions.`;

export const technicalAnalysisTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a technical analysis for {{ticker}}
Write a concise technical analysis from the perspective of {{agentName}}. Focus on technical indicators and chart patterns.
Whenever you mention a ticker, add a $ symbol in front of it. Also state the current price of the stock somewhere in the analysis.

Consider:
- Support and resistance levels
- Moving averages
- Technical indicators (RSI, MACD, etc.)
- Volume analysis
- Chart patterns
- Price targets

#Technical Analysis:
{{technicalAnalysis}}

#Current Stock Price:
{{currentStockPrice}}

Your response should be technically focused. No questions or emojis. Use \\n\\n for spacing between points. Should be 2-4 sentences.`;

export const newsAnalysisTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a news analysis for {{ticker}}
Write a concise news analysis from the perspective of {{agentName}}. Focus on recent developments and their market impact.
Whenever you mention a ticker, add a $ symbol in front of it. Also state the current price of the stock somewhere in the analysis.

Consider:
- Breaking news
- Company announcements
- Industry developments
- Market reaction
- Potential impact on stock price

#Latest News:
{{news}}

#Current Stock Price:
{{currentStockPrice}}

Your response should be fact-based and objective. No questions or emojis. Use \\n\\n for spacing between points. Should be 1-2 sentences containing most impactful news info.`;

export const stockAnalysisTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}

# Task: Generate a stock analysis for {{ticker}}
Write a concise stock analysis from the perspective of {{agentName}}. Focus on fundamental analysis and valuation.
Whenever you mention a ticker, add a $ symbol in front of it. Also state the current price of the stock somewhere in the analysis.

Consider:
- Financial metrics
- Growth prospects
- Market position
- Valuation multiples
- Risk factors

#Stock Analysis:
{{stockAnalysis}}

# Financial Summary:
{{financialSummary}}

#Current Stock Price:
{{currentStockPrice}}

Your response should be data-driven and analytical. No questions or emojis. Use \\n\\n for spacing between points. Should be 2-4 sentences.`;

