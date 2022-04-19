import {useState} from 'react';
import {CodeBlock} from '@atlaskit/code';
import Button from '@atlaskit/button';
import Form, {Field, FormSection} from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';
import TextArea from '@atlaskit/textarea';

import Layout from 'src/components/templates/layout/layout';

const breadcrumbs = [
  {text: 'Text Tools'},
];

export default function Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Layout breadcrumbs={breadcrumbs} title="String Utilities">
      <Form onSubmit={null}>
        {({formProps}) => (
          <form {...formProps}>
            <FormSection>
              <div>
                <Field id="input" name="input" label="Input">
                  {() => (
                    <TextArea resize="none" rows={12} onChange={onChange}/>
                  )}
                </Field>
              </div>

              <div className="mt-4">
                <CountTool input={input}/>
              </div>

              <div className="grid grid-cols-3 gap-4 items-end mt-4">
                <SplitTool input={input} setOutput={setOutput}/>
                <div/>
                <CaseTool input={input} setOutput={setOutput}/>
              </div>

              {output && (
                <div className="mt-8">
                  <CodeBlock language="text" text={output}/>
                </div>
              )}
            </FormSection>
          </form>
        )}
      </Form>
    </Layout>
  );
}

declare type ICountToolProps = {
  input: string;
}

function CountTool(props: ICountToolProps) {
  const {input} = props;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Field id="characterCount" name="characterCount" label="Character Count">
          {() => (
            <Textfield value={input.trim().length} isReadOnly/>
          )}
        </Field>
      </div>

      <div>
        <Field id="wordCount" name="wordCount" label="Word Count">
          {() => (
            <Textfield value={input ? input.trim().split(/\s+/).length : 0} isReadOnly/>
          )}
        </Field>
      </div>

      <div>
        <Field id="lineCount" name="lineCount" label="Line Count">
          {() => (
            <Textfield value={input ? input.trim().split(/\n+/).length : 0} isReadOnly/>
          )}
        </Field>
      </div>
    </div>
  );
}

declare type ISplitToolProps = {
  input: string;
  setOutput: (string) => void;
};

function SplitTool(props: ISplitToolProps) {
  const [separator, setSeparator] = useState('');

  const onChange = (e: any) => {
    setSeparator(e.target.value);
  }

  const onClick = () => {
    if (!separator) {
      return;
    }

    let output = [];

    let fragments = props.input.trim().split(separator);
    for (let fragment of fragments) {
      if (fragment.trim().length) {
        output.push(fragment.trim());
      }
    }

    props.setOutput(output.join('\n'));
  }

  return (
    <div className="flex justify-start items-end">
      <div className="flex-1">
        <Field id="splitString" name="splitString" label="Split String">
          {() => (
            <Textfield onChange={onChange}/>
          )}
        </Field>
      </div>

      <div className="ml-4">
        <Button className="btn-lg" onClick={onClick}>
          Split
        </Button>
      </div>
    </div>
  );
}

declare type ICaseToolProps = {
  input: string;
  setOutput: (string) => void;
};

function CaseTool(props: ICaseToolProps) {
  const {input, setOutput} = props;

  const onClickUpper = () => {
    setOutput(input.toUpperCase());
  }

  const onClickLower = () => {
    setOutput(input.toLowerCase());
  }

  const onClickReverse = () => {
    setOutput(input.split('').reverse().join(''));
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="flex-1">
        <Button className="btn-lg" shouldFitContainer onClick={onClickUpper}>
          Upper
        </Button>
      </div>

      <div className="flex-1">
        <Button className="btn-lg" shouldFitContainer onClick={onClickLower}>
          Lower
        </Button>
      </div>

      <div className="flex-1">
        <Button className="btn-lg" shouldFitContainer onClick={onClickReverse}>
          Reverse
        </Button>
      </div>
    </div>
  );
}
