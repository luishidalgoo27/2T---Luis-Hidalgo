<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/">
        <xsl:for-each select="/libreria/libro">
        <xsl:element name="libro">
            <xsl:attribute name="precio">
            <xsl:value-of select="precio"/>
            </xsl:attribute>
            <xsl:element name="titulo">
            <xsl:value-of select="titulo"/>
        </xsl:element>
         <xsl:element name="nombre_autor">
            <xsl:value-of select="autor"/>
        </xsl:element>
        </xsl:element>
        
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>