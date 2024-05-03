<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:import href="./core/pretext-html.xsl"/>


    <!-- Defined terms (bold, typically) -->
<xsl:template match="term[@color]">
  <xsl:variable name="colorvar" select="@color"/>
  <dfn class="terminology" style="color: red">
    <xsl:attribute name="style">color: <xsl:value-of select="$colorvar"/>
  </xsl:attribute>
      <xsl:apply-templates />
  </dfn>
  <div class="audio"><audio>
    <xsl:attribute name="controls"/>
    <source src="horse.ogg" type="audio/ogg"/>
  </audio></div>
</xsl:template>



</xsl:stylesheet>