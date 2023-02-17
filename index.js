var template = '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==';
var content = 'Lorem    ipsum XXXdolor sitxxx amet.';

function prepareConfidentialDocument(content, template) {
  content = content.trim().replace(/\s+/g, " ");  
  content = content.replace(/XXX(.*?)XXX/ig, '[REDACTED]');
  return template.replace('::content::', content);
  
  
}


console.log(prepareConfidentialDocument(content, template));
