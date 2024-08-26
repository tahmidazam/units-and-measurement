"use client";

import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  IconButton,
  Section,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import {
  codegen,
  CodegenOptions,
  CodegenOptionsSchema,
  getOptionsFromSnippet,
} from "@repo/codegen";
import hljs from "highlight.js";
import { format } from "prettier";
import parserEsTree from "prettier/plugins/estree.js";
import parserTypeScript from "prettier/plugins/typescript.js";
import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import { toast } from "sonner";
import "./../../css/github.css";

export default function CodegenPage() {
  const [className, setClassName] = useState("");
  const [snippet, setSnippet] = useState("");
  const [baseUnit, setBaseUnit] = useState("");
  const [options, setOptions] = useState<CodegenOptions | undefined>(undefined);

  const [formattedResult, setFormattedResult] = useState<string | undefined>(
    undefined
  );
  const [html, setHtml] = useState<string | undefined>(undefined);

  function generate() {
    const options = getOptionsFromSnippet(snippet, className, baseUnit);
    const result = CodegenOptionsSchema.safeParse(options);

    if (!result.success) {
      toast.error(
        result.error.issues
          .map((issue) => `${issue.path}: ${issue.message}`)
          .join(", ")
      );
      return;
    }

    setOptions(result.data);
  }

  function clear() {
    setSnippet("");
    setOptions(undefined);
    setFormattedResult(undefined);
    setHtml(undefined);
  }

  function copy() {
    if (!formattedResult) return;

    navigator.clipboard
      .writeText(formattedResult)
      .then(() => {
        toast.success("Copied formatted code to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy formatted code to clipboard");
      });
  }

  function formatAndHighlight() {
    if (!options) return;

    format(codegen(options), {
      parser: "typescript",
      plugins: [parserTypeScript, parserEsTree],
    }).then((formattedResult: string) => {
      setFormattedResult(formattedResult);

      const highlighted = hljs.highlight(formattedResult, {
        language: "typescript",
      });
      const sanitized = sanitizeHtml(highlighted.value, {
        allowedAttributes: {
          "*": ["class"],
        },
        allowedClasses: {
          code: ["hljs", "language-*"],
        },
      });

      setHtml(sanitized);
    });
  }

  useEffect(formatAndHighlight, [options]);

  return (
    <Section>
      <Container size="2">
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2">
            <Heading>Generate Subclass</Heading>
            <Text>
              Paste in a Swift struct from the Foundation library and generate a
              TypeScript subclass of <Code>Dimension</Code>.
            </Text>
          </Flex>

          <Flex direction="column" gap="4" align="end">
            <TextArea
              className="min-h-96 w-full"
              value={snippet}
              onChange={(event) => setSnippet(event.target.value)}
              placeholder="Paste Swift structs here..."
            />

            <Flex gap="4" className="w-full">
              <TextField.Root
                className="w-full"
                value={className}
                onChange={(event) => setClassName(event.target.value)}
                placeholder="Subclass name"
              />

              <TextField.Root
                className="w-full"
                value={baseUnit}
                onChange={(event) => setBaseUnit(event.target.value)}
                placeholder="Base unit"
              />
            </Flex>

            <Flex gap="4" justify="between" className="w-full">
              <Button variant="soft" onClick={clear} disabled={!snippet}>
                Clear
              </Button>

              <Flex gap="4">
                <IconButton
                  variant="soft"
                  onClick={copy}
                  disabled={!formattedResult}
                >
                  <ClipboardCopyIcon />
                </IconButton>

                <Button onClick={generate}>Generate</Button>
              </Flex>
            </Flex>
          </Flex>

          {html && (
            <Card asChild>
              <pre className=" text-wrap">
                <code dangerouslySetInnerHTML={{ __html: html }}></code>
              </pre>
            </Card>
          )}
        </Flex>
      </Container>
    </Section>
  );
}
