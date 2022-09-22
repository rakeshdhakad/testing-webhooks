class BaseSerializer < ActiveModel::Serializer
  def replace_name_tag(text)
    text_with_replacements = text.dup
    specifier_text = object.match_outcomes.where(match_id: match.id).last.specifier_text
    text.scan(::Market::NAME_REGEX).each do |m|
      value = if m.last.include?('competitor')
                competitors[m.last]
              else
                specifier_text[m[1]]
              end
      text_with_replacements.gsub!(m[0], value) if value
    end
    text_with_replacements
  end

  def competitors
    return @competitors if @competitors.present?
    @competitors = {}
    match
      .competitors
      .includes(:team)
      .map { |c| @competitors[c.qualifier.casecmp('home').zero? ? '$competitor1' : '$competitor2'] = c.team.name }
    @competitors
  end
end
