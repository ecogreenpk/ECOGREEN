<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - EcoGreen</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            padding: 30px;
          }
          h1 {
            color: #15803d;
            text-align: center;
            margin-bottom: 10px;
            font-size: 28px;
          }
          .info {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            font-size: 14px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background-color: #15803d;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #e0e0e0;
          }
          tr:nth-child(even) {
            background-color: #f5f5f5;
          }
          tr:hover {
            background-color: #e8f5e9;
          }
          a {
            color: #15803d;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            background-color: #fff3cd;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: 500;
          }
          .priority.high {
            background-color: #d4edda;
            color: #155724;
          }
          .priority.medium {
            background-color: #fff3cd;
            color: #856404;
          }
          .priority.low {
            background-color: #f8d7da;
            color: #721c24;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📍 EcoGreen Sitemap</h1>
          <div class="info">
            Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
            | Last Updated: <strong><xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></strong>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.9">
                        <span class="priority high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.7">
                        <span class="priority medium"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
