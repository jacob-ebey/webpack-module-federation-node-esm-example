# Webpack Module Federation Node ESM Example

This project serves as a straightforward and illustrative demonstration of how
two Node.js processes can collaborate by federating modules through HTTP dynamic
imports using Webpack. The main goal is to showcase how you can achieve module
sharing and dynamic loading in a Node.js environment.

## Key Features

- Utilizes the `--experimental-network-imports` flag to effectively import
  federated chunks over HTTP.
- Leverages Webpack's experimental features:
  - `experiments.outputModule`
  - `externalsType: "module"`
  - `output.chunkFormat: "module"`
  - `output.chunkLoading: "import"`

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Installation

To begin, install the required dependencies using the following command:

```sh
pnpm i
```

### Build

Next, trigger the build process with the subsequent command:

```sh
pnpm build
```

### Running

Commence the execution of the project by running:

```sh
pnpm start
```

This will initiate the Node.js processes, allowing you to witness the module
federation and HTTP dynamic imports in action.

## Explanation

The project employs cutting-edge features from Webpack and Node.js to enable
seamless module sharing and dynamic loading. By utilizing the
`--experimental-network-imports` flag, modules are fetched over HTTP, thereby
facilitating effective module federation between two Node.js processes. This is
accomplished through Webpack's advanced settings such as
`experiments.outputModule`, `externalsType: "module"`,
`output.chunkFormat: "module"`, and `output.chunkLoading: "import"`. These
settings collectively enable the generation of ESM output, ensuring optimal
dynamic imports for efficient chunk loading.

Through these steps, the project effectively demonstrates how to create an
environment where Node.js processes can collaborate and share modules
effortlessly.

## Further Steps

This example serves as a foundation for understanding module federation and
dynamic imports. To explore more complex scenarios and integrate these concepts
into your own projects, consider the following steps:

- **Deep Dive**: Study the Webpack documentation to understand the full spectrum
  of possibilities with module federation and dynamic imports.

- **Real-world Integration**: Apply the knowledge gained from this example to
  integrate module federation into your larger projects, enabling efficient code
  sharing and dynamic loading.

- **Optimization**: Experiment with different settings and configurations to
  optimize performance and loading times in scenarios involving multiple
  federated modules.

- **Error Handling**: Implement robust error-handling mechanisms to ensure
  graceful degradation in case of failed module imports or network issues.

By delving deeper into these areas, you can unlock the full potential of module
federation and dynamic imports in your Node.js projects.
