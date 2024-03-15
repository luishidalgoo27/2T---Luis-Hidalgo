<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
    <html>
    <head>
    </head>
    <body>
    <table border='5'>
                    <tr><th>Titulo</th><th>Autor</th><th>Precio</th></tr>
        <xsl:for-each select="/libreria/libro"> //recorrer
            <xsl:sort select="titulo"/>//ordenar
            <xsl:choose> //elegir varias opciones
                <xsl:when test="precio = 5">
                    <h3> Luis </h3>
                </xsl:when>
                <xsl:otherwise>
                    <h3> Putero </h3>
                </xsl:otherwise>
            </xsl:choose>
                <xsl:if test="precio &gt; 25">//condición
                    
                    <tr><td><xsl:value-of select="titulo"/></td><td><xsl:value-of select="autor"/></td>
                    <td><xsl:value-of select="precio"/></td></tr>
                    
                </xsl:if>
        </xsl:for-each>
        </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>