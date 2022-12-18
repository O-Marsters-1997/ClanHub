# Shared Dependencies

## File Location

- Shared dependencies are located within the "shared" worspace, nested within the `apps` directory.
- The only excepetion to this are all packages to do with linting and formatting.
  - These all exist within the root directory because in this way it is easier to extend to additional configuration files.

## Versioning

- For any dependencies that exist in multiple workspaces, versioning is kept consistent by the "shared" repo being added to the dependencies of other projects.
